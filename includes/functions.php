<?php
    //
    include("connect.php");

    //store the SQL query in a variable
    $query = "SELECT * FROM profs";

    //this is the database result -> the raw data that SQL gives you
    $runQuery = $pdo->query($query);

    //store each row of data in an empty array(gets processed below)
    $result = array();

    while ($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)){
        //while row exists, get it and put it in the array
        $result[] = $row;
    }

    //sends the DB back to our JS file as a json object
    echo (json_encode($result));