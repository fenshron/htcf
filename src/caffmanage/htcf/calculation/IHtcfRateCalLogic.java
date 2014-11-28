package caffmanage.htcf.calculation;

import caff.core.logic.ILogic;
import caff.core.logic.cache.ILogicCache;

public interface IHtcfRateCalLogic extends ILogic<HtcfRateCal>,ILogicCache{
	public void setRateType(HtcfRateCal htcfRateCal);
	public double getCalculrate(double money);
	public double getratemanage(double rate);
	public double getRatechange(double rate);
}
