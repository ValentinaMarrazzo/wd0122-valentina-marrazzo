package multimediaClasses;

public class FileVideo extends FileAudioVideo {

	int brightness;
	String indexB = "*";

	// COSTRUTTORE FILE VDIEO
	public FileVideo(String t, int d, int v, int b) {
		this.title = t;
		this.duration = d;
		this.volume = v;
		this.brightness = b;
	}

	// METODO PLAY PER VIDEO
	public void playV() {
		this.play();
		System.out.println("Volume: " + this.indexV + " Luminosità: " + this.brightness);
	}

	// METODI PER IL VOLUME

	public void abbassaVolume() {
		--this.volume;
		String anIndex = "!";
		for (int i = 0; i <= this.volume; i++) {
			anIndex += "!";
		}
		this.indexV = anIndex;
	}

	public void alzaVolume() {
		++this.volume;
		String anIndex = "!";
		for (int i = 0; i <= this.volume; i++) {
			anIndex += "!";
		}
		this.indexV = anIndex;
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

}
