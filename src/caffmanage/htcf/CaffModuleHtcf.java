package caffmanage.htcf;



import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import caff.core.CaffApp;
import caff.core.logic.ILogicFacade;
import caff.core.logic.LogicFacade;
import caff.module.CaffModuleAbstract;
import caff.util.MiscUtil;
import caffbizz.sys.sitestatic.ICaffSiteStaticLogic;

/**
 * 工程的模块定义
 */
public class CaffModuleHtcf extends CaffModuleAbstract {
	
	private static Log _logger = LogFactory.getLog(CaffModuleHtcf.class);

	public CaffModuleHtcf() {
		this.addPackage("caffmanage.htcf");
		this.setLoadOrder(Integer.MAX_VALUE);//最后加载
	}
	
	@Override
	public void init() {
		//设置不要强制跳转的URL
//		CaffFilterUrlJump.addDontRedirestURL("/WEB-INF/site/index.xhtml");
		this.addSiteStaticData();
	}
	
	/**
	 * 添加页面静态化的数据
	 */
	private void addSiteStaticData() {
		_logger.info("-------------->添加静态化任务数据");
		String[] urls = new String[]{
				"/index.htm",
				"/login.htm",
				"/bbs/community.htm",
				"/content/about.htm",
				"/content/certificate.htm",
				"/content/partners.htm",
				"/content/joinus.htm",
				"/content/company_elegant.htm",
				"/content/mediaReport.htm",
				"/content/contact.htm",
		};
		
		ILogicFacade logicFacade = (ILogicFacade)CaffApp.SINGLETON.getSpringContext().getBean(
				MiscUtil.getBeanNameFirstCharLowcase(LogicFacade.class));
		ICaffSiteStaticLogic siteStaticLogic = logicFacade.getService(ICaffSiteStaticLogic.class);
		for (String url : urls) {
			siteStaticLogic.addSiteURL(url);
			_logger.info("--------------> " + url);
		}
	}
	
}
