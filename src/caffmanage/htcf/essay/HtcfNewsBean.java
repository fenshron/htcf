package caffmanage.htcf.essay;

import java.util.List;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import caff.core.ui.WebBeanAbstract;
import caff.data.condition.page.CaffPage;


@Scope("prototype")
@Controller("htcfNewsBean")
public class HtcfNewsBean extends WebBeanAbstract<HtcfNews, IHtcfNewsLogic, HtcfNewsCondition>{
	private List<HtcfNews> _htcfConsNews;
	private List<HtcfNews> _htcfwealthNews;
	private List<HtcfNews> _htcfSchoolNews;
	private List<HtcfNews> _newswithoutflag;
	private CaffPage<HtcfNews> _htcfConsNewsbyP;
	private CaffPage<HtcfNews> _htcfWealthNewsByP;
	private CaffPage<HtcfNews> _htcfSchoolNewsByP;
	private HtcfNews _htcfnews;
	
	//新增新闻
	public void addnew(){
		this.saveEntity(_htcfnews);
	}
	
	
	
	//查询5条
	public List<HtcfNews> getnews(int flag){
		IHtcfNewsLogic htcfNewsLogic = this.getLogicService(IHtcfNewsLogic.class);
		return htcfNewsLogic.getPagingItems(htcfNewsLogic.getnewscond(flag), HtcfNews.class, 1, 5);
	}

	
	
	//分页查询
	public CaffPage<HtcfNews> getAllNewsByPage(int flag){
		HtcfNewsCondition condition = this.getPagingCondition();
		condition.addflag(flag);
		condition.orderByDesc("createdDateLong");
		return this.getLogicService().getPageFromCache(condition);
	}
	
	//获得咨询
	public List<HtcfNews> getHtcfConsNews() {
		int flag = 1;
		this._htcfConsNews = this.getnews(flag);
		return _htcfConsNews;
	}
	

	
	public void setHtcfConsNews(List<HtcfNews> htcfConsNews) {
		this._htcfConsNews = htcfConsNews;
	}
	//获得新闻
	public List<HtcfNews> getHtcfwealthNews() {
		int flag = 2;
		this._htcfwealthNews = this.getnews(flag);
		return _htcfwealthNews;
	}
	
	
	public void setHtcfwealthNews(List<HtcfNews> htcfwealthNews) {
		this._htcfwealthNews = htcfwealthNews;
	}
	//获得学堂
	public List<HtcfNews> getHtcfSchoolNews() {
		int flag = 3;
		this._htcfSchoolNews = this.getnews(flag);
		return _htcfSchoolNews;
	}

	
	public void setHtcfSchoolNews(List<HtcfNews> htcfSchoolNews) {
		this._htcfSchoolNews = htcfSchoolNews;
	}
	
	//新闻查询(详情)
	public HtcfNews getHtcfnews() {
		Long id = getRequestEnv().getParamLong("pid");
		IHtcfNewsLogic htcfNewsLogic = this.getLogicService(IHtcfNewsLogic.class);
		this._htcfnews = (HtcfNews) htcfNewsLogic.getEntity(id);
		return _htcfnews;
	}

	public void setHtcfnews(HtcfNews htcfnews) {
		this._htcfnews = htcfnews;
	}
	
	//分页查询新闻
	public CaffPage<HtcfNews> getHtcfConsNewsbyP() {
		int flag = 1;
		this._htcfConsNewsbyP = this.getAllNewsByPage(flag);
		return _htcfConsNewsbyP;
	}
	public void setHtcfConsNewsbyP(CaffPage<HtcfNews> htcfConsNewsbyP) {
		_htcfConsNewsbyP = htcfConsNewsbyP;
	}
	
	//分页查询财富资讯
	public CaffPage<HtcfNews> getHtcfWealthNewsByP() {
		int flag = 2;
		this._htcfWealthNewsByP = this.getAllNewsByPage(flag);
		return _htcfWealthNewsByP;
	}
	public void setHtcfWealthNewsByP(CaffPage<HtcfNews> htcfWealthNewsByP) {
		_htcfWealthNewsByP = htcfWealthNewsByP;
	}
	
	//分页查询财富学堂
	public CaffPage<HtcfNews> getHtcfSchoolNewsByP() {
		int flag=3;
		this._htcfSchoolNewsByP = this.getAllNewsByPage(flag);
		return _htcfSchoolNewsByP;
	}
	public void setHtcfSchoolNewsByP(CaffPage<HtcfNews> htcfSchoolNewsByP) {
		_htcfSchoolNewsByP = htcfSchoolNewsByP;
	}

	//查询新闻，不使用标示符
	public List<HtcfNews> getNewswithoutflag() {
		IHtcfNewsLogic htcfNewsLogic = this.getLogicService(IHtcfNewsLogic.class);
		this._newswithoutflag = htcfNewsLogic.getPagingItems(htcfNewsLogic.getnewsbytime(), HtcfNews.class, 1, 10);
		return _newswithoutflag;
	}

	public void setNewswithoutflag(List<HtcfNews> newswithoutflag) {
		_newswithoutflag = newswithoutflag;
	}
	
	
}
