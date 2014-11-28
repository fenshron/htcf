package caffmanage.htcf.essay;

import java.util.Date;

import caff.util.DateUtil;
import caffbizz.basicdata.usermanagement.user.EntityWrpperWithUser;

public class HtcfNewsWrapper extends EntityWrpperWithUser<HtcfNews> {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String _createDateYear;
	private String _createDateMonthDay;
	
	
	
	
	public HtcfNewsWrapper(HtcfNews htcfNews) {
		super(htcfNews);
	}
	
	private HtcfNews _htcfNews;

	public HtcfNews getHtcfNews() {
		return _htcfNews;
	}

	public void setHtcfNews(HtcfNews htcfNews) {
		_htcfNews = htcfNews;
	}
	
	public String getCreateDateYear(){
		_createDateYear = getDateYear(getEntity().getCreatedDate());
		return _createDateYear;
	}
	
	public String getDateYear(Date date){
		return String.valueOf(DateUtil.getYear(date));
		
	}

	public void setCreateDateYear(String createDateYear) {
		_createDateYear = createDateYear;
	}

	public String getCreateDateMonthDay() {
		_createDateMonthDay = getDateMonthDay(getEntity().getCreatedDate());
		return _createDateMonthDay;
	}

	public void setCreateDateMonthDay(String createDateMonthDay) {
		_createDateMonthDay = createDateMonthDay;
	}
	
	
}
