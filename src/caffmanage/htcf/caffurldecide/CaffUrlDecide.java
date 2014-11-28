package caffmanage.htcf.caffurldecide;

import javax.servlet.http.HttpServletRequest;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import caff.core.logic.LogicAbstract;
import caff.core.logic.login.CaffLoginContext;
import caff.core.ui.CaffRequestEnvServlet;
import caff.core.ui.ICaffRequestEnv;

import caff.web.filter.urljump.ICaffUrlDecide;
import caffmanage.htcf.calculation.IHtcfRateCalLogic;

@SuppressWarnings("unchecked")
@Scope("prototype")
@Controller("iCaffUrlDecide")
public class CaffUrlDecide extends LogicAbstract implements ICaffUrlDecide {

	@Override
	public String getJumpURL(HttpServletRequest request) {
	    ICaffRequestEnv requestEnv = new CaffRequestEnvServlet(request);
	    if (CaffLoginContext.isLoginOK(requestEnv)) {
	      String username = CaffLoginContext.getLastLoginUsername(requestEnv);
	      IHtcfRateCalLogic userLogic = (IHtcfRateCalLogic)getLogicFacade().getService(IHtcfRateCalLogic.class);
	    
	    }
	    return null;
	}





	

}
