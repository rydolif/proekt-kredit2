<?php
	$SITE_TITLE = 'Proekt-Kredit';
	$SITE_DESCR = '';

	if ( isset($_POST) ) {

		$name = htmlspecialchars(trim($_POST['name']));
		$phone = htmlspecialchars(trim($_POST['phone']));
		$email = htmlspecialchars(trim($_POST['email']));
		$date = htmlspecialchars(trim($_POST['date']));
		$inn = htmlspecialchars(trim($_POST['inn']));
		$citizenship = htmlspecialchars(trim($_POST['citizenship']));
		$addres = htmlspecialchars(trim($_POST['addres']));
		$addresfact = htmlspecialchars(trim($_POST['addresfact']));
		$passport = htmlspecialchars(trim($_POST['passport']));
		$kem = htmlspecialchars(trim($_POST['kem']));
		$seria = htmlspecialchars(trim($_POST['seria']));
		$education = htmlspecialchars(trim($_POST['education']));
		$specialty = htmlspecialchars(trim($_POST['specialty']));
		$desired = htmlspecialchars(trim($_POST['desired']));
		$salary = htmlspecialchars(trim($_POST['salary']));
		$employment = htmlspecialchars(trim($_POST['employment']));
		$children = htmlspecialchars(trim($_POST['children']));
		$changedthename = htmlspecialchars(trim($_POST['changedthename']));

		$comment = isset($_POST['comment']) ? htmlspecialchars(trim($_POST['comment'])) : '';
		$to = 'rudolifrudolif@gmail.com';

		$headers = "From: $SITE_TITLE \r\n";
		$headers .= "Reply-To: ". $email . "\r\n";
		$headers .= 'MIME-Version: 1.0' . "\r\n";
		$headers .= "Content-Type: text/html; charset=utf-8\r\n";

		$data = '<h1>'.$subject."</h1><br><br><br>";

		$data .= 'ФИО: '.$name."<br><br>";
		$data .= 'Дата рождения: ' . $date ."<br><br>";
		$data .= 'ИНН: ' . $inn ."<br><br>";
		$data .= 'Гражданство: ' . $citizenship ."<br><br>";
		$data .= 'Адрес прописки: ' . $addres ."<br><br>";
		$data .= 'Адрес проживания: ' . $addresfact ."<br><br>";
		$data .= 'Серия и номер паспорта: ' . $passport ."<br><br>";
		$data .= 'Кем выдан паспорт: ' . $seria ."<br><br>";
		$data .= 'Дата выдачи паспорта и код подразделения: ' . $kem ."<br><br>";
		$data .= 'Образование: ' . $education ."<br><br>";
		$data .= 'Специальность по образованию: ' . $specialty ."<br><br>";
		$data .= 'Желаемая профессия: ' . $desired ."<br><br>";
		$data .= 'Желаемая заработная плата: ' . $salary ."<br><br>";
		$data .= 'Желаемая дата трудоустройства: ' . $employment ."<br><br>";
		$data .= 'Есть ли несовершеннолетние дети: ' . $children ."<br><br>";
		$data .= 'Если вы меняли фамилию, укажите дату ее изменения: ' . $changedthename ."<br><br>";

		$data .= 'Телефон: '.$phone."<br><br>";
		$data .= 'Почта: '.$email."<br><br>";

		$data .= 'Комментарий: '.$comment."<br><br>";
	

		$message = "<div style='background:#ccc;border-radius:10px;padding:20px;'>
				".$data."
				<br>\n
				<hr>\n
				<br>\n
				<small>это сообщение было отправлено с сайта ".$SITE_TITLE." - ".$SITE_DESCR.", отвечать на него не надо</small>\n</div>";
		$send = mail($to, $subject, $message, $headers);

		if ( $send ) {
			echo '';
		} else {
				echo '<div class="error">Ошибка отправки формы</div>';
		}

	}
	else {
			echo '<div class="error">Ошибка, данные формы не переданы.</div>';
	}
	die();
?>