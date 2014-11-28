package caffmanage.htcf.essay;

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
@Table(name="htcfnews")
public class HtcfNews extends EntityWithUserId{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long _htcfnewsid;
	private String _htcfnewstittle;
	private String _htcfnewscontent;
	private int _htcfnewsflag;
	
	
	public HtcfNews() {
		this.setEntityWrapper(new HtcfNewsWrapper(this));
	}
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="htcfnewsid",unique=true,nullable=false)
	public Long getHtcfnewsid() {
		return _htcfnewsid;
	}
	public void setHtcfnewsid(Long htcfnewsid) {
		this._htcfnewsid = htcfnewsid;
	}
	
	@Column(name="htcfnewstittle",nullable=false)
	public String getHtcfnewstittle() {
		return _htcfnewstittle;
	}
	public void setHtcfnewstittle(String htcfnewstittle) {
		this._htcfnewstittle = htcfnewstittle;
	}
	
	@Column(name="htcfnewscontent",nullable=false)
	public String getHtcfnewscontent() {
		return _htcfnewscontent;
	}
	public void setHtcfnewscontent(String htcfnewscontent) {
		this._htcfnewscontent = htcfnewscontent;
	}
	
	@Column(name="htcfnewsflag",nullable=false)
	public int getHtcfnewsflag() {
		return _htcfnewsflag;
	}
	public void setHtcfnewsflag(int flag) {
		this._htcfnewsflag = flag;
	}
	
	
}
