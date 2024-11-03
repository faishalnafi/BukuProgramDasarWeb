<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nama = $_POST['nama'];
  $email = $_POST['email'];
  $pesan = $_POST['pesan'];

  // Konfigurasi email
  $to = "tujuan@email.com";
  $subject = "Pesan dari website";
  $message = "Nama: $nama\nEmail: $email\nPesan:\n$pesan";
  $headers = "From: $email";

  // Kirim email
  mail($to, $subject, $message, $headers);

  echo "Pesan berhasil terkirim!";
}
?>
