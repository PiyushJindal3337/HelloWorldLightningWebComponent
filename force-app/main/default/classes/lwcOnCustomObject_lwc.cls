public class lwcOnCustomObject_lwc {
    public lwcOnCustomObject_lwc() {}
    
    @AuraEnabled(cacheable=true)
    public static List<SObject> getRecords(String recId)
    {
        User u = [select firstname from user where id=:userinfo.getuserid()];
        string username = u.firstname;
        system.debug('loggedin user-->>'+username);
        String str = 'select id, Name, Phone__c, Email__c from lwc__c LIMIT 2';
        return Database.query(str);
    }    
}

