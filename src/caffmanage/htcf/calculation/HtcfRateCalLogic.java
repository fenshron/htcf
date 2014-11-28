package caffmanage.htcf.calculation;

import java.math.BigDecimal;

import org.springframework.stereotype.Service;

import caff.core.logic.LogicCacheAbstract;

@Service("iHtcfRateCalLogic")
public class HtcfRateCalLogic extends LogicCacheAbstract<HtcfRateCal> implements IHtcfRateCalLogic {
	private double rate;
	
	@Override
	public void setRateType(HtcfRateCal htcfRateCal) {
		if(htcfRateCal.getHtcfRateCalId().equals(new Long(1))){this.rate=htcfRateCal.getRate()*2;}
		if(htcfRateCal.getHtcfRateCalId().equals(new Long(2))){this.rate=htcfRateCal.getRate()*1.5;}
		if(htcfRateCal.getHtcfRateCalId().equals(new Long(3))){this.rate=htcfRateCal.getRate();}
		if(htcfRateCal.getHtcfRateCalId().equals(new Long(4))){this.rate=htcfRateCal.getRate();}
		if(htcfRateCal.getHtcfRateCalId().equals(new Long(5))){this.rate=htcfRateCal.getRate()*0.5;}
		if(htcfRateCal.getHtcfRateCalId().equals(new Long(6))){this.rate=htcfRateCal.getRate()*0.25;}
		if(htcfRateCal.getHtcfRateCalId().equals(new Long(7))){this.rate=htcfRateCal.getRate()/12;}
		if(htcfRateCal.getHtcfRateCalId().equals(new Long(8))){this.rate=htcfRateCal.getRate()*7/360;}
	}

	@Override
	public double getCalculrate(double money) {
		return money*this.rate;
	}
	
	@Override
	public double getratemanage(double rate) {
		BigDecimal b = new BigDecimal(rate*0.005); 
		return b.setScale(2,BigDecimal.ROUND_HALF_UP).doubleValue();
	}
	
	@Override
	public double getRatechange(double rate) {
		BigDecimal b = new BigDecimal(rate); 
		return b.setScale(2,BigDecimal.ROUND_HALF_UP).doubleValue();
	}
	
	public double getRate() {
		return rate;
	}

	public void setRate(double rate) {
		this.rate = rate;
	}

	@Override
	public <P> String getCacheKey(P arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <C, P> C rebuildCache(P arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	

	

	
	
	
	
}
