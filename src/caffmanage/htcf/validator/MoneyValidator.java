package caffmanage.htcf.validator;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.validator.FacesValidator;
import javax.faces.validator.Validator;
import javax.faces.validator.ValidatorException;
@FacesValidator("MoneyValidator")
public class MoneyValidator implements Validator {
	private static final String NUMBER_PATTERN = "^[1-9]+(\\.[0-9])?([0-9])?";
	private Pattern pattern;
	private Matcher matcher;
	
	public MoneyValidator(){
		  pattern = Pattern.compile(NUMBER_PATTERN);
	}
	
	@Override
	public void validate(FacesContext context, UIComponent component,
			Object value) throws ValidatorException {
 
		matcher = pattern.matcher(value.toString());
		if(!matcher.matches()){
 
			FacesMessage msg = 
				new FacesMessage("货币格式不正确.", 
						"货币格式不正确  例如：\"123.12\"");
			msg.setSeverity(FacesMessage.SEVERITY_ERROR);
			throw new ValidatorException(msg);
		}
		
	}
}
