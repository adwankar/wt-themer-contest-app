Ext.define('ThemerContestApp.util.Utility', {
	singleton: true,

	alternateClassName: ['Utility'],

	//social url links
	twitter_link_url: 'https://twitter.com/sencha?lang=en',
	linkedin_link_url: 'https://www.linkedin.com/company/sencha-inc',
	facebook_link_url: 'https://www.facebook.com/senchainc/',

	getTodoIcons: function(value) {
		if (value == "Send email") {
			return "emailicon-cls"
		} else if (value == "Write blog") {
			return "blogicon-cls"
		} else if (value == "Book flight and hotel") {
			return "flighticon-cls"
		} else if (value == "Register") {
			return "registericon-cls"
		} else if (value == "Tweet about conference") {
			return "tweeticon-cls"
		} else if (value == "Perpare for talk") {
			return "talkicon-cls"
		} else {
			return "";
		}
	}
});