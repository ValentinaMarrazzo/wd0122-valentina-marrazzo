package multimediaClasses;

import java.util.Scanner;

public class Player {
	private static Scanner input = new Scanner(System.in);
	private static FileAudio[] listA = new FileAudio[5];
	private static FileVideo[] listV = new FileVideo[5];
	private static FileImage[] listI = new FileImage[5];

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// INSERIRE TIPO DI MEDIA E AGGIUNGERE A LISTA
		System.out.println("Aggiungi file Audio, Video o Immagine");
		switch (input.next()) {
		case "Immagine":
			for (int n = 0; n < listI.length; n++) {
				FileImage i = new FileImage("UnaImmagine", 5);
				listI[n] = i;

			}
			break;
		case "Video":
			for (int n = 0; n < listI.length; n++) {
				FileVideo v = new FileVideo("UnVideo", 3, 5, 5);
				listV[n] = v;

			}
			break;
		case "Audio":
			for (int n = 0; n < listI.length; n++) {
				FileAudio a = new FileAudio("UnAudio", 3, 5);
				listA[n] = a;

			}
			break;

		}

		// SELEZIONARE MEDIA DA LISTA
		System.out.println("Seleziona elemento da 0 a 4, poi");
		System.out.println("Seleziona lista: A, V, I");
		int n = input.nextInt();
		switch (input.next()) {
		case "A":
			listA[n].playA();
			break;
		case "V":
			listV[n].playV();
			break;
		case "I":
			listI[n].show();
			break;
		}

	}

}
