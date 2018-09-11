<?php
$fileName = $_FILES['file1']['name'];
$fileTmpLoc = $_FILES['file1']['tmp_name'];
$fileType = $_FILES['file1']['type'];
$fileSize = $_FILES['file1']['size'];
$fileErrorMsg = $_FILES['file1']['error'];
 if (!$fileTmpLoc) {
    echo 'Error';
    die;
}
 if (move_uploaded_file($fileTmpLoc, __DIR__ . '/../uploads/' . $fileName)) {
    echo 'Файл <b>' . $fileName . '</b> успешно загружен!';
} else {
    echo 'Ошибка загрузки';
} 