<?php
// Veritabanı bağlantısı
$servername = "localhost";
$username = "kullanici_adi";
$password = "parola";
$dbname = "veritabani_adi";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Veritabanı bağlantısı başarısız: " . $conn->connect_error);
}

// Aranan kelimeyi al
$arananKelime = $_POST["arananKelime"];

// Veritabanında arama yap
$sql = "SELECT * FROM icerikler WHERE baslik LIKE '%$arananKelime%' OR icerik LIKE '%$arananKelime%'";
$result = $conn->query($sql);

// Sonuçları görüntüle
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        // Sonuçları ekrana yazdır veya işle
        echo "Başlık: " . $row["baslik"] . "<br>";
        echo "İçerik: " . $row["icerik"] . "<br><br>";
    }
} else {
    echo "Sonuç bulunamadı.";
}

$conn->close();
?>