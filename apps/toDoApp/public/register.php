
<?php
require_once __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../generated-conf/config.php';
$error = [];
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $emailAdress = $_POST["email"];
    $username = $_POST["username"];
    $password = $_POST["password"];
    $confirmPassword = $_POST["confirmPassword"];
    $created_at = date("Y-m-d H:i:s");
    $updated_at = date("Y-m-d H:i:s");
    // Validate email
    if (!preg_match("/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/", $emailAdress)) {
        $error[] = "Invalid email address!";
    }
    else if (!preg_match("/^[a-zA-Z0-9]*$/", $username)) {
        $error[] = "Invalid username! Only alphanumeric characters are allowed.";
    }
    else if (!preg_match("/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/", $password)) {
        $error[] = "Invalid password! It must contain at least 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character.";
    }
    else if ($password != $confirmPassword) {
        $error[] = "Passwords do not match!";
    }



    if (!$error) {
        // use propel to save the data to the database
    $user = new \a3emond\User();
    $user->setEmailadress($emailAdress);
    $user->setUsername($username);
    //hash the password
    $password = password_hash($password, PASSWORD_DEFAULT);
    $user->setPassword($password);
    $user->setCreatedAt($created_at);
    $user->setUpdatedAt($updated_at);
    $user->save();

    echo json_encode([
        'status' => 'success',
        'message' => 'Registration successful!'
    ]);
    exit;
    } else if (!empty($error)){
        echo json_encode([
            'status' => 'error',
            'message' => implode(" ", $error)
        ]);
        exit;
    }
}
?>

    <div class="formContainer">
        <h2>Nouvel Utilisateur</h2>
        <br />
        <form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>">
            <label for="email">Email:</label>
            <input type="email" name="email" value="<?php echo isset($_POST['email']) ? htmlspecialchars($_POST['email'], ENT_QUOTES) : ''; ?>" required><br>

            <label for="username">Nom d'utilisateur:</label>
            <input type="text" name="username" value="<?php echo isset($_POST['username']) ? htmlspecialchars($_POST['username'], ENT_QUOTES) : ''; ?>" required><br>

            <label for="password">Mot de passe:</label>
            <input type="password" id="password" name="password" required ><br>

            <label for="confirmPassword">Confirmez le mot de passe:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required ><br>
            <button class="formBtn" id="registerBtn" type="submit">Register</button>
            <br />
            <button id="backBtn" class="formBtn">Retour</button>
        </form>
    </div>