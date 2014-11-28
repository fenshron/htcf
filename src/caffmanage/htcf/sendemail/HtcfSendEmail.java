package caffmanage.htcf.sendemail;
public class HtcfSendEmail  {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long caffSendEmailId;
	private String caffSendEmailUsername;
	private String caffSendEmailPhone;
	private String caffSendEmailCity;
	private String caffSendEmailWorkAdress;
	private String caffSendEmailJob;
	private String caffSendEmailEmail;
	private String caffSendEmailMoney;
	private String caffSendEmailInformation;
	private String caffSendEmailVerification;
	 
	 

	public Long getCaffSendEmailId() {
		return caffSendEmailId;
	}



	public void setCaffSendEmailId(Long caffSendEmailId) {
		this.caffSendEmailId = caffSendEmailId;
	}



	public String getCaffSendEmailUsername() {
		return caffSendEmailUsername;
	}



	public void setCaffSendEmailUsername(String caffSendEmailUsername) {
		this.caffSendEmailUsername = caffSendEmailUsername;
	}



	public String getCaffSendEmailPhone() {
		return caffSendEmailPhone;
	}



	public void setCaffSendEmailPhone(String caffSendEmailPhone) {
		this.caffSendEmailPhone = caffSendEmailPhone;
	}



	public String getCaffSendEmailCity() {
		return caffSendEmailCity;
	}



	public void setCaffSendEmailCity(String caffSendEmailCity) {
		this.caffSendEmailCity = caffSendEmailCity;
	}



	public String getCaffSendEmailWorkAdress() {
		return caffSendEmailWorkAdress;
	}



	public void setCaffSendEmailWorkAdress(String caffSendEmailWorkAdress) {
		this.caffSendEmailWorkAdress = caffSendEmailWorkAdress;
	}



	public String getCaffSendEmailJob() {
		return caffSendEmailJob;
	}



	public void setCaffSendEmailJob(String caffSendEmailJob) {
		this.caffSendEmailJob = caffSendEmailJob;
	}



	public String getCaffSendEmailEmail() {
		return caffSendEmailEmail;
	}



	public void setCaffSendEmailEmail(String caffSendEmailEmail) {
		this.caffSendEmailEmail = caffSendEmailEmail;
	}



	public String getCaffSendEmailMoney() {
		return caffSendEmailMoney;
	}



	public void setCaffSendEmailMoney(String caffSendEmailMoney) {
		this.caffSendEmailMoney = caffSendEmailMoney;
	}



	public String getCaffSendEmailInformation() {
		return caffSendEmailInformation;
	}



	public void setCaffSendEmailInformation(String caffSendEmailInformation) {
		this.caffSendEmailInformation = caffSendEmailInformation;
	}



	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	

	public String getCaffSendEmailVerification() {
		return caffSendEmailVerification;
	}



	public void setCaffSendEmailVerification(String caffSendEmailVerification) {
		this.caffSendEmailVerification = caffSendEmailVerification;
	}



	@Override
	public String toString() {
		return "姓名：" + caffSendEmailUsername
		+ ",\r\n城市：" + caffSendEmailCity
		+ ",\r\n了解渠道:" + caffSendEmailInformation
		+ ",\r\n职务:" + caffSendEmailJob
		+ ",\r\n预投金额:" + caffSendEmailMoney
		+ ",\r\n电话:" + caffSendEmailPhone
		+ ",\r\n邮箱:" + caffSendEmailEmail 
		+ ",\r\n工作地址：" + caffSendEmailWorkAdress;
	}
	
	
	

}
