update CaffOption set `value`='127.0.0.1:11211' where name='data_memcached_server_1';
update CaffOption set `value`='debug' where name='sms_type';
update CaffOption set `value`='http://localhost:8080' where name='web_root';
update CaffOption set `value`='D:/caff/.metadata/.plugins/org.eclipse.wst.server.core/tmp0/wtpwebapps/caffp2p.yscf' where name='path_open_file';
update CaffOption set `value`='D:/caffp2p.yscf' where name='path_private_file';
update CaffP2pUser set password='b13acbbb065901032fb52c43753ad4947d00738b',tradePassword='',exkey=3;