<?php
use PHPUnit\Framework\TestCase;

class DatabaseTest extends TestCase {
    // Define a test method to check the database connection
    public function testDatabaseConnection() {
        // Modify these values to match your database configuration
        $host = "localhost";
        $username = "root";
        $password = "";
        $database = "garbage-selor";

        $conn = new mysqli($host, $username, $password, $database);

        $this->assertFalse($conn->connect_error, 'Database connection failed');
    }

    // Define a test method to check the data insertion
    public function testDataInsertion() {
        // Create a mock $_POST array with sample data
        $_POST = [
            "nama" => "John Doe",
            "tanggal" => "2023-11-10",
            "alamat" => "123 Main St",
            "nomor_telepon" => "555-123-4567",
            "username" => "johndoe",
            "password" => "secretpassword"
        ];

        // Include your original PHP code here (excluding the database connection part)

        // Simulate database insertion
        $this->assertTrue($conn->query($sql), 'Data insertion failed');
    }
}

