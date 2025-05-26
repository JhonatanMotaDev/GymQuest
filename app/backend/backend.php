<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

spl_autoload_register(function ($class) {
    $file = __DIR__ . '/classes/' . $class . '.php';
    if (file_exists($file)) {
        require_once $file;
    }
});

require_once __DIR__ . '/config/config.php';
require_once __DIR__ . '/helpers/helpers.php';

session_start();

header('Content-Type: application/json');

try {
    $db = new PDO(
        "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME,
        DB_USER,
        DB_PASS,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed']);
    exit;
}

$requestMethod = $_SERVER['REQUEST_METHOD'];
$requestUri = $_SERVER['REQUEST_URI'];

$routes = [
    'GET' => [
        '/api/users' => 'UserController@getAllUsers',
        '/api/users/{id}' => 'UserController@getUserById',
        '/api/classes' => 'ClassController@getAllClasses',
        '/api/classes/{id}' => 'ClassController@getClassById',
    ],
    'POST' => [
        '/api/users' => 'UserController@createUser',
        '/api/classes' => 'ClassController@createClass',
    ],
    'PUT' => [
        '/api/users/{id}' => 'UserController@updateUser',
        '/api/classes/{id}' => 'ClassController@updateClass',
    ],
    'DELETE' => [
        '/api/users/{id}' => 'UserController@deleteUser',
        '/api/classes/{id}' => 'ClassController@deleteClass',
    ],
];

$routeMatched = false;
foreach ($routes[$requestMethod] ?? [] as $route => $handler) {
    $pattern = preg_replace('/\{[a-zA-Z0-9_]+\}/', '([a-zA-Z0-9_-]+)', $route);
    $pattern = str_replace('/', '\/', $pattern);
    if (preg_match('/^' . $pattern . '$/', $requestUri, $matches)) {
        $routeMatched = true;
        array_shift($matches);
        [$controller, $method] = explode('@', $handler);
        $controllerFile = __DIR__ . '/controllers/' . $controller . '.php';

        if (file_exists($controllerFile)) {
            require_once $controllerFile;
            if (class_exists($controller)) {
                $controllerInstance = new $controller($db);
                if (method_exists($controllerInstance, $method)) {
                    try {
                        $response = call_user_func_array([$controllerInstance, $method], $matches);
                        echo json_encode($response);
                    } catch (Exception $e) {
                        http_response_code(500);
                        echo json_encode(['error' => $e->getMessage()]);
                    }
                } else {
                    http_response_code(404);
                    echo json_encode(['error' => 'Method not found']);
                }
            } else {
                http_response_code(404);
                echo json_encode(['error' => 'Controller not found']);
            }
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'Controller file not found']);
        }
        break;
    }
}

if (!$routeMatched) {
    http_response_code(404);
    echo json_encode(['error' => 'Route not found']);
}

function getJsonInput()
{
    $input = file_get_contents('php://input');
    return json_decode($input, true);
}

class UserController
{
    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function getAllUsers()
    {
        $stmt = $this->db->query('SELECT * FROM users');
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getUserById($id)
    {
        $stmt = $this->db->prepare('SELECT * FROM users WHERE id = :id');
        $stmt->execute(['id' => $id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function createUser()
    {
        $data = getJsonInput();
        $stmt = $this->db->prepare('INSERT INTO users (name, email) VALUES (:name, :email)');
        $stmt->execute(['name' => $data['name'], 'email' => $data['email']]);
        return ['message' => 'User created successfully'];
    }

    public function updateUser($id)
    {
        $data = getJsonInput();
        $stmt = $this->db->prepare('UPDATE users SET name = :name, email = :email WHERE id = :id');
        $stmt->execute(['name' => $data['name'], 'email' => $data['email'], 'id' => $id]);
        return ['message' => 'User updated successfully'];
    }

    public function deleteUser($id)
    {
        $stmt = $this->db->prepare('DELETE FROM users WHERE id = :id');
        $stmt->execute(['id' => $id]);
        return ['message' => 'User deleted successfully'];
    }
}

class ClassController
{
    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function getAllClasses()
    {
        $stmt = $this->db->query('SELECT * FROM classes');
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getClassById($id)
    {
        $stmt = $this->db->prepare('SELECT * FROM classes WHERE id = :id');
        $stmt->execute(['id' => $id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function createClass()
    {
        $data = getJsonInput();
        $stmt = $this->db->prepare('INSERT INTO classes (name, description) VALUES (:name, :description)');
        $stmt->execute(['name' => $data['name'], 'description' => $data['description']]);
        return ['message' => 'Class created successfully'];
    }

    public function updateClass($id)
    {
        $data = getJsonInput();
        $stmt = $this->db->prepare('UPDATE classes SET name = :name, description = :description WHERE id = :id');
        $stmt->execute(['name' => $data['name'], 'description' => $data['description'], 'id' => $id]);
        return ['message' => 'Class updated successfully'];
    }

    public function deleteClass($id)
    {
        $stmt = $this->db->prepare('DELETE FROM classes WHERE id = :id');
        $stmt->execute(['id' => $id]);
        return ['message' => 'Class deleted successfully'];
    }
}
?>
