<?php
    if(isset($_POST['localStorage'])) 
    {
        $arr= json_decode( $_POST['localStorage'] , true) ;
        $conn = new mysqli("localhost", "root", "rootroot", "p_event");
        if($conn->connect_error){
           die($conn->connect_error);
        }

        foreach ($arr as $key => $value) {
            //insert
        $sql = "Insert Into v_event values('$key', '$value')";
        $conn->query($sql);
        if($conn->affected_rows > 0)
        {
         // echo "Inserted Successfully";
        }
        else
        {
          echo "Sorry: Problem With Insertion";	
        }
        
        }
      
     
    }
   
  
  if(isset($_GET['v_event']))
  {
  
    $conn = new mysqli("localhost", "root", "rootroot", "p_event");
    if($conn->connect_error)
    {
      die($conn->connect_error);
    }
    
    $sql = " select * FROM v_event ";

    if ($result = $conn->query($sql))
    {
      $rows = array();
       if($result->num_rows > 0)
       {
         while($row = $result->fetch_assoc())
         {
             array_push($rows, $row);
         }
             //Convert to JSON Before Sending to Client
        echo json_encode($rows,true);
       }
    }
    else
    {
       echo "No Data to Retrieve";
    }
        
  }

?>