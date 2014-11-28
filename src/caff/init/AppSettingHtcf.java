package caff.init;

import org.springframework.stereotype.Service;

import caff.core.AppSettingAbstract;
import caff.core.module.CaffModuleCaffBase;
import caffbizz.module.CaffModuleBizzBasicData;
import caffbizz.module.CaffModuleBizzSys;
import caffmanage.htcf.CaffModuleHtcf;

@Service("appSettingHtcf")
public class AppSettingHtcf extends AppSettingAbstract {

	public AppSettingHtcf() {
		this.addCaffModule(new CaffModuleCaffBase());
		this.addCaffModule(new CaffModuleBizzSys());
		this.addCaffModule(new CaffModuleBizzBasicData());
		this.addCaffModule(new CaffModuleHtcf());
	}
	
}
