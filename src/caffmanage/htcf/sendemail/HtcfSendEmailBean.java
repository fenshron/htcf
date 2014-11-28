package caffmanage.htcf.sendemail;

 
import javax.faces.bean.ViewScoped;

import org.springframework.stereotype.Controller;
import caffbizz.basicdata.usermanagement.user.ICaffUserLogic;
import caffbizz.basicdata.usermanagement.user.WebBeanUserSupportNoEntityCaffDefault;
import caffbizz.basicdata.usermanagement.user.password.ISafePasswordChecker;

@ViewScoped
@Controller("htcfSendEmailBean")
public class HtcfSendEmailBean extends WebBeanUserSupportNoEntityCaffDefault{
	private HtcfSendEmail caffsendemail;
	private String restult;
	public HtcfSendEmailBean(){
		caffsendemail =new HtcfSendEmail();
		
	}
	public String send(){
		 SendEmailUtil email=new SendEmailUtil();
		 if(isVcodeImageOK()&&caffsendemail.getCaffSendEmailUsername()!=""&&caffsendemail.getCaffSendEmailPhone()!=""){
			 email.sendemail(caffsendemail.toString());
			 restult="完成已经提交！";
		 }else{
			 restult="填写的表单存在问题，提交不能完成！";
		 }
		 
		return restult;
	 }

	public HtcfSendEmail getCaffsendemail() {
		return caffsendemail;
	}

	public void setCaffsendemail(HtcfSendEmail caffsendemail) {
		this.caffsendemail = caffsendemail;
	}

	@Override
	protected ISafePasswordChecker getSafePasswordChecker() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ICaffUserLogic getUserLogic() {
		// TODO Auto-generated method stub
		return null;
	}
	public String getRestult() {
		return restult;
	}
	public void setRestult(String restult) {
		this.restult = restult;
	}
	
}
 

