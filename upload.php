<?php
$targetDir = "/rock-app/uploads/";
$fileName = basename($_FILES["uploadfile"]["name"]);
$fileTmpName = $_FILES["uploadfile"]["tmp_name"];
$fileType = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

// Check if file already exists
if (file_exists($targetDir. $fileName)) {
    echo "<h3>The file already exists</h3>";
} else {
    // Define error message
    if ($_FILES["uploadfile"]["error"] > 0) {
        echo "Error: ". $_FILES["uploadfile"]["error"]. "<br>";
    } else {
        // Move the uploaded file to the target directory
        if (move_uploaded_file($fileTmpName, $targetDir. $fileName)) {
            echo "<h3>File Successfully Uploaded</h3>";
        } else {
            echo "Failed to upload file.";
        }
    }
}
?>