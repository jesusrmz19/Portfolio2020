<?php
    $result="";
    if(isset($_POST['submit'])) {
        require 'phpmailer/PHPMailerAutoload.php';
        $mail = new PHPMailer;

        $mail->Host='smtp.gmail.com';
        $mail->Port=587;
        $mail->SMTPAuth=true;
        $mail->SMTPSecure='tls';
        $mail->Username='jrmz.maldonado@gmail.com';
        $mail->Password='Crimsonsunrise11';

        $mail->setForm($_POST['email'],$_POST['name']);
        $mail->addAddress('jrmz.maldonado@gmail.com');
        $mail->addReplyTo($_POST['email'],$_POST['name']);

        $mail->isHTML(true);
        $mail->Subject='Form Submission from Web Page';
        $mail->Body='<h1 align=center>Name: '.$_POST['name'].'<br>Email: '.$_POST['email'].'<br>Message: '.$_POST['message'].'</h1>';

        if(!$mail->send()){
            $result="Something went wrong. Please try again.";
        }else{
            $result="Thanks ".$_POST['name']." for contacting us. We'll get back to you soon";
        }

    }

?>