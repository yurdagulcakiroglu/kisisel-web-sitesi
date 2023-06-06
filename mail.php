<?php


$servername = "localhost";
$username = "kullanici_adi";
$password = "parola";
$dbname = "veritabani_adi";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Veritabanı bağlantısı başarısız: " . $conn->connect_error);
}

// Form verilerini al
$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

// Veritabanına kaydet
$sql = "INSERT INTO messages (name, email, subject, message) VALUES ('$name', '$email', '$subject', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "Mesaj başarıyla kaydedildi.";
} else {
    echo "Hata: " . $sql . "<br>" . $conn->error;
}

// E-posta gönderme
$to = "ygulcakiroglu@gmail.com";
$headers = "From: $email \r\n";
$headers .= "Reply-To: $email \r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$subject = "Yeni İletişim Mesajı";
$message = "İsim: $name<br>
            E-posta: $email<br>
            Konu: $subject<br>
            Mesaj: $message<br>";

mail($to, $subject, $message, $headers);

$conn->close();
?>