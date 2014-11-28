package caffmanage.htcf.sendemail;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import caff.util.mail.MailMan;

public class SendEmailUtil extends  MailMan{
	public  void sendemail(String content){
		 Properties props = new Properties();
		 String path=this.getClass().getResource(File.separator).getPath();
		 System.out.println(path);
		 InputStream in;
			try {
				in = new BufferedInputStream (new FileInputStream(path+File.separator+"senemail.properties"));
			props.load(in);
			this.doInit(props.getProperty("smtpHost"), true, props.getProperty("userName"), props.getProperty("password"), props.getProperty("from"));
			this.doSend(props.getProperty("to"), props.getProperty("subject"),content, (String[])null);
			} catch (FileNotFoundException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
	}
  

}
