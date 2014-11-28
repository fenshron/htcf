package caffmanage.htcf.calculation;

import java.text.NumberFormat;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;



import caff.core.ui.WebBeanAbstract;


@Scope("prototype")
@Controller("htcfRateCalBean")
public class HtcfRateCalBean extends WebBeanAbstract<HtcfRateCal, IHtcfRateCalLogic, HtcfRateCalCondition>{
	private HtcfRateCal _htcfRateCal = new HtcfRateCal();
	private String _time;//投资期限
	private double _money;//投资金额
	private String _rate;//年化利率
	private String _ratecount;//总利息
	private String _ragemanage;//利息管理费
	private String _ratemonth;//每月利息
	private String _countmoney;//本息和
	private String _returnmoney;//实际收款金额
	private boolean _flag=false;//判断是否为先息后本
	private String _message;
	public void calculation(){
		
	}
	
	public HtcfRateCal getProductRate(){
		this._htcfRateCal = (HtcfRateCal) this.getEntity(this._htcfRateCal.getId());
		NumberFormat fmt = NumberFormat.getPercentInstance();  
        fmt.setMaximumFractionDigits(2);
		this._rate =  fmt.format(this._htcfRateCal.getRate());
		this._time = this._htcfRateCal.getTime();
		return _htcfRateCal;
	}

	public void calcul(){
		if(this._htcfRateCal.getHtcfRateCalId().equals(new Long(0))){
			this._message="请选择产品";
		}else{
			if(this._money%10000!=0||this._money<50000){
				this._message="投资最少5万元且以1万为单位增加";
				this._money=0;
				this.getProductRate();
			}
			else{ 
				if(!this._htcfRateCal.getHtcfRateCalId().equals(new Long(0))){
				IHtcfRateCalLogic calLogic = this.getLogicService(IHtcfRateCalLogic.class);
				calLogic.setRateType(getProductRate());
				double ratecount = calLogic.getCalculrate(_money);
				if(_htcfRateCal.getHtcfRateCalId().equals(new Long(4))){
					this._ratemonth = String.valueOf(calLogic.getRatechange(ratecount)/12);
					this._flag=true;
				}
				this._ratecount = String.valueOf(calLogic.getRatechange(ratecount));
				this._ragemanage = String.valueOf(calLogic.getratemanage(ratecount));
				this._countmoney = String.valueOf(calLogic.getRatechange(ratecount+this._money));
				this._money = calLogic.getRatechange(this._money);
				this._returnmoney = String.valueOf(calLogic.getRatechange(ratecount+this._money-calLogic.getratemanage(ratecount)));
				this._message="";
				}
			}
		}
	}
	
	public HtcfRateCal getHtcfRateCal() {
		return _htcfRateCal;
	}

	public void setHtcfRateCal(HtcfRateCal htcfRateCal) {
		_htcfRateCal = htcfRateCal;
	}

	public String getTime() {
		return _time;
	}

	public void setTime(String time) {
		this._time = time;
	}

	public double getMoney() {
		return _money;
	}

	public void setMoney(double money) {
		this._money = money;
	}

	public String getRate() {
		return _rate;
	}

	public void setRate(String rate) {
		this._rate = rate;
	}

	public String getRagemanage() {
		return _ragemanage;
	}

	public void setRagemanage(String ragemanage) {
		this._ragemanage = ragemanage;
	}

	public String getRatecount() {
		return _ratecount;
	}

	public void setRatecount(String ratecount) {
		this._ratecount = ratecount;
	}

	public String getRatemonth() {
		return _ratemonth;
	}

	public void setRatemonth(String ratemonth) {
		_ratemonth = ratemonth;
	}

	public String getCountmoney() {
		return _countmoney;
	}

	public void setCountmoney(String countmoney) {
		this._countmoney = countmoney;
	}

	public boolean isFlag() {
		return _flag;
	}

	public void setFlag(boolean flag) {
		this._flag = flag;
	}

	public String getReturnmoney() {
		return _returnmoney;
	}

	public void setReturnmoney(String returnmoney) {
		this._returnmoney = returnmoney;
	}

	public String getMessage() {
		return _message;
	}

	public void setMessage(String message) {
		this._message = message;
	}
	
	
	

	



	
}
