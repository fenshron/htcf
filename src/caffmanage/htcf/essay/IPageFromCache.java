package caffmanage.htcf.essay;

import caff.data.IEntity;
import caff.data.condition.ConditionHibernateAbstract;
import caff.data.condition.page.CaffPage;
import java.util.List;

public abstract interface IPageFromCache<T extends IEntity>
{
  public abstract <CD extends ConditionHibernateAbstract<T>> CaffPage<T> getPageFromCache(CD paramCD);

  public abstract <CD extends ConditionHibernateAbstract<T>> List<T> getItemsFromCache(CD paramCD);
}