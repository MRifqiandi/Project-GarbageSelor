<?php
$host       = "localhost";
$user       = "root";
$pass       = "";
$db         = "garbage-selor";

$koneksi    = mysqli_connect($host, $user, $pass, $db);
if (!$koneksi) { //cek koneksi
    die("Tidak bisa terkoneksi ke database");
}
$nama           = "";
$username       = "";
$password       = "";
$alamat         = "";
$sukses         = "";
$error          = "";

if (isset($_GET['op'])) {
    $op = $_GET['op'];
} else {
    $op = "";
}
if($op == 'delete'){
    $id         = $_GET['id'];
    $sql1       = "delete from user_data where id = '$id'";
    $q1         = mysqli_query($koneksi,$sql1);
    if($q1){
        $sukses = "Berhasil hapus data";
    }else{
        $error  = "Gagal melakukan delete data";
    }
}
if ($op == 'edit') {
    $id         = $_GET['id'];
    $sql1       = "select * from user_data where id = '$id'";
    $q1         = mysqli_query($koneksi, $sql1);
    $r1         = mysqli_fetch_array($q1);
    $nama       = $r1['nama'];
    $username   = $r1['username'];
    $alamat     = $r1['alamat'];
    $password   = $r1['password'];

    if ($nama == '') {
        $error = "Data tidak ditemukan";
    }
}
if (isset($_POST['simpan'])) { //untuk create
    $nama       = $_POST['nama'];
    $username   = $_POST['username'];
    $alamat     = $_POST['alamat'];
    $password   = $_POST['password'];

    if ($nama && $alamat && $password) {
        if ($op == 'edit') { //untuk update
            $sql1       = "update user_data set nama='$nama', username = '$username',alamat = '$alamat',password='$password' where id = '$id'";
            $q1         = mysqli_query($koneksi, $sql1);
            if ($q1) {
                $sukses = "Data berhasil diupdate";
            } else {
                $error  = "Data gagal diupdate";
            }
        } else { //untuk insert
            $sql1   = "insert into user_data(nama,username,alamat,password) values ('$nama','$username','$alamat','$password')";
            $q1     = mysqli_query($koneksi, $sql1);
            if ($q1) {
                $sukses  = "Berhasil memasukkan data baru";
            } else {
                $error   = "Gagal memasukkan data";
            }
        }
    } else {
        $error = "Silakan masukkan semua data";
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data garbage</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <style>
        body {
        background: linear-gradient(to right, #113946, #bababa, #ffffff);
        }
        
        .mx-auto {
            width: 800px
        }

        .card {
            margin-top: 50px;
        }
    </style>
</head>

<body>


    <!-- navbar -->

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">GarBage Selor</a>
            <button class="btn btn-outline-success me-2" type="button" onclick="window.location.href='export.php'">Export Data</button>
         </div>
    </nav>     


    <!-- nav -->

    <div class="mx-auto">
        <!-- untuk memasukkan data -->
        <div class="card">
            <div class="card-header">
                Create / Edit Data
            </div>
            <div class="card-body">
                <?php
                if ($error) {
                ?>
                    <div class="alert alert-danger" role="alert">
                        <?php echo $error ?>
                    </div>
                <?php
                    header("refresh:5;url=index.php");//5 : detik
                }
                ?>
                <?php
                if ($sukses) {
                ?>
                    <div class="alert alert-success" role="alert">
                        <?php echo $sukses ?>
                    </div>
                <?php
                    header("refresh:5;url=index.php");
                }
                ?>
                <form action="" method="POST">
                    <div class="mb-3 row">
                        <label for="nama" class="col-sm-2 col-form-label">Nama</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="nama" name="nama" value="<?php echo $nama ?>">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="alamat" class="col-sm-2 col-form-label">Alamat</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="nama" name="alamat" value="<?php echo $alamat ?>">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="username" class="col-sm-2 col-form-label">Username</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="username" name="username" value="<?php echo $username ?>">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="password" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="password" name="password" value="<?php echo $password ?>">
                        </div>
                    </div>
                    <div class="col-12">
                        <input type="submit" name="simpan" value="Simpan Data" class="btn btn-primary" />
                    </div>
                </form>
            </div>
        </div>

        
        <!-- untuk mengeluarkan data -->
<div class="card">
    <div class="card-header text-white bg-secondary">
        Data garbage
    </div>
    <div class="card-body">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Username</th>
                    <th scope="col">Alamat</th>
                    <th scope="col">Password</th>
                    <th scope="col">Aksi</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $sql2 = "select * from user_data order by id desc";
                $q2 = mysqli_query($koneksi, $sql2);
                $urut = 1;
                while ($r2 = mysqli_fetch_array($q2)) {
                    $id = $r2['id'];
                    $nama = $r2['nama'];
                    $username = $r2['username'];
                    $alamat = $r2['alamat'];
                    $password = $r2['password'];

                    echo '<tr>';
                    echo '<th scope="row">' . $urut++ . '</th>';
                    echo '<td scope="row">' . $nama . '</td>';
                    echo '<td scope="row">' . $username . '</td>';
                    echo '<td scope="row">' . $alamat . '</td>';
                    echo '<td scope="row">' . $password . '</td>';
                    echo '<td scope="row">';
                    echo '<a href="index.php?op=edit&id=' . $id . '"><button type="button" class="btn btn-secondary">Edit</button></a>';
                    echo '<a href="index.php?op=delete&id=' . $id . '" onclick="return confirm(\'Yakin mau delete data?\')"><button type="button" class="btn btn-danger">Delete</button></a>';
                    echo '</td>';
                    echo '</tr>';
                }
                ?>
            </tbody>
        </table>
    </div>
</div>

</body>

</html>