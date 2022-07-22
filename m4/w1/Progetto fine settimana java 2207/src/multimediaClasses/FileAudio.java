package multimediaClasses;

//CLASSE FILE AUDIO

public class FileAudio extends FileAudioVideo {
	
	
	
	//COSTRUTTORE FILE AUDIO
	public FileAudio(String t, int d, int v) {
		this.title = t;
		this.duration = d;
		this.volume = v;
	}
	
	//METODO PLAY PER AUDIO
	public void playA() {
		this.play();
		System.out.println("Volume: " + this.indexV);
	}
	
	//METODI PER IL VOLUME 
	
	public void abbassaVolume(){
		--this.volume;
		String anIndex = "!";
		for(int i = 0; i <= this.volume; i++) {
			anIndex += "!";
		}
		this.indexV = anIndex;
	}
	
	public void alzaVolume(){
		++this.volume;
		String anIndex = "!";
		for(int i = 0; i <= this.volume; i++) {
			anIndex += "!";
		}
		this.indexV = anIndex;		
	}

}
