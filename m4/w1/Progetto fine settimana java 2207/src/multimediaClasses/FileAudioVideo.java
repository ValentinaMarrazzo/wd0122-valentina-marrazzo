package multimediaClasses;

//CLASSE GENERALE PER I FILE RIPRODUCIBILI

public class FileAudioVideo extends FileMultimedia{
	
	int duration;
	int volume;
	String indexV = "!";

	public void play() {
		for(int i = 1; i<=this.duration; i++) {
			System.out.println(this.title);
		}
	}
}
