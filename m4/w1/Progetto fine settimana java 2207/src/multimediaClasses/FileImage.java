package multimediaClasses;

public class FileImage extends FileMultimedia{
	int brightness;
	String indexB = "*";
	
	//COSTRUTTORE IMMAGINE
	public FileImage(String t, int b) {
		this.title = t;
		this.brightness = b;
	}
	
	// METODI PER LA LUMINOSITA'
		public void aumentaLuminosita() {
			++this.brightness;
			String anIndex = "*";
			for (int i = 0; i <= this.brightness; i++) {
				anIndex += "*";
			}
			this.indexB = anIndex;
		}

		public void diminuisciLuminosita() {
			--this.brightness;
			String anIndex = "*";
			for (int i = 0; i <= this.brightness; i++) {
				anIndex += "*";
			}
			this.indexB = anIndex;
		}
	
		//METODO PER LA RIPRODUZIONE
		public void show() {
			System.out.println(this.title + " Luminosità: " + this.brightness);
		}

}
