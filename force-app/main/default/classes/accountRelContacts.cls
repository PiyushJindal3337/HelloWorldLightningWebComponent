public with sharing class accountRelContacts {
    public accountRelContacts() {

    }
    @AuraEnabled(cacheable=true)
    public static List<SObject> getAccRelContacts(String accountId)
    {
        User u = [select firstname from user where id=:userinfo.getuserid()];
        string username = u.firstname;
        system.debug('loggedin user-->>'+username);
        String str = 'select id, Name, Phone, Email from Contact where AccountId =:accountId';
        return Database.query(str);
    }
}
