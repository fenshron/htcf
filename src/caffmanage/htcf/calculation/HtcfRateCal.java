package caffmanage.htcf.calculation;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Repository;

import caffbizz.basicdata.usermanagement.user.EntityWithUserId;

@Repository
@Entity
@Table(name="htcfproductrate")
public class HtcfRateCal extends EntityWithUserId{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long _htcfRateCalId;
	private String _productName;
	private double _rate;
	private double _managerate;
	private String _time;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="caffp2phtcfproductid",unique=true,nullable=false)
	public Long getHtcfRateCalId() {
		return _htcfRateCalId;
	}
	public void setHtcfRateCalId(Long caffp2phtcfproductid) {
		this._htcfRateCalId = caffp2phtcfproductid;
	}
	
	@Column(name="productname",nullable=false)
	public String getProductName() {
		return _productName;
	}
	public void setProductName(String productName) {
		this._productName = productName;
	}
	
	@Column(name="rate",nullable=false)
	public double getRate() {
		return _rate;
	}
	public void setRate(double rate) {
		this._rate = rate;
	}
	
	@Column(name="ratemanage",nullable=false)
	public double getManagerate() {
		return _managerate;
	}
	public void setManagerate(double managerate) {
		this._managerate = managerate;
	}
	
	@Column(name="time",nullable=false)
	public String getTime() {
		return _time;
	}
	public void setTime(String time) {
		this._time = time;
	}
	
	
	
}
