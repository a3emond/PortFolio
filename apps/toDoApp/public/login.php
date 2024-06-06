<?php
    require_once __DIR__ . '/../vendor/autoload.php';
    require __DIR__ . '/../generated-conf/config.php';
    $error = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = $_POST["username"];
        $password = $_POST["password"];

        if (!$error) {
            $user = \a3emond\UserQuery::create()->findOneByUsername($username);
            if ($user) {
                if (password_verify($password, $user->getPassword())) {
                    session_start();
                    // store user_id in session
                    $_SESSION["user_id"] = $user->getId();
                    echo json_encode([
                        'status' => 'success',
                        'message' => 'Login successful!'
                    ]);
                    exit; // Stop the script after sending the JSON response
                } else {
                    $error = "Invalid password!";
                }
            } else {
                $error = "Invalid username!";
            }
        }
        // If there's an error, send a JSON response with the error
        echo json_encode([
            'status' => 'error',
            'message' => $error
        ]);
        exit; // Stop the script after sending the JSON response
    }
?>
<div class="formContainer">
    <h2>Connexion</h2>
    <br />
    <form action="login.php" method="post">
        <label>Nom d'utilisateur :</label>
        <input id="name" name="username" placeholder="username" type="text" required>
        <label>Mot de passe :</label>
        <input id="password" name="password" placeholder="**********" type="password" required><br />
        <button class="formBtn" type="submit" id="loginBtn">Se Connecter</button>
        <br />
        <p><i>Pas encore inscrit? Creez un compte!</i></p> 
        <br />
        <button class="formBtn" id="registerBtn">Nouveau compte</button>
    </form>
    
</div>        