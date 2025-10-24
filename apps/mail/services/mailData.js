import { utilService } from "../../../services/util.service.js"
const now = Date.now()

export const mailsHC = [
  {
    "id": utilService.makeId(),
    "createdAt": 1760621529082,
    "subject": "Invoice #22054 available",
    "body": "Your monthly invoice is ready for download.",
    "isRead": false,
    "sentAt": 1760621529082,
    "removedAt": null,
    "from": "Fiverr",
    "fromEmail": "billing@fiverr.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Promotions",
      "Social"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760603529082,
    "subject": "Team sync notes \u2013 VC Seminar",
    "body": "Here are the notes from our last session.",
    "isRead": false,
    "sentAt": 1760603529082,
    "removedAt": null,
    "from": "Maya Bar",
    "fromEmail": "maya.bar@reichman.ac.il",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Promotions"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760585529082,
    "subject": "Your Uber trip receipt",
    "body": "Thanks for riding with us. Your receipt is attached below.",
    "isRead": true,
    "sentAt": 1760585529082,
    "removedAt": null,
    "from": "Uber",
    "fromEmail": "receipts@uber.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Promotions"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760567529082,
    "subject": "How was your stay? Leave a review",
    "body": "Share your experience with your host.",
    "isRead": false,
    "sentAt": 1760567529082,
    "removedAt": null,
    "from": "Airbnb",
    "fromEmail": "reviews@airbnb.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Promotions"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760549529082,
    "subject": "New follower on Instagram \ud83d\udcab",
    "body": "You have a new follower. See who started following you.",
    "isRead": true,
    "sentAt": 1760549529082,
    "removedAt": null,
    "from": "Instagram",
    "fromEmail": "no-reply@mail.instagram.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Updates",
      "Social"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760531529082,
    "subject": "Your Spotify receipt",
    "body": "Thanks for being a Premium member. Here\u2019s your monthly receipt.",
    "isRead": true,
    "sentAt": 1760531529082,
    "removedAt": null,
    "from": "Spotify",
    "fromEmail": "no-reply@spotify.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Primary"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760513529082,
    "subject": "Your surf wax order receipt \ud83e\uddf4",
    "body": "Thanks for your purchase. Order #18756 details inside.",
    "isRead": false,
    "sentAt": 1760513529082,
    "removedAt": null,
    "from": "SurfSupply Co",
    "fromEmail": "orders@surfsupply.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Promotions"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760495529082,
    "subject": "Your reservation is confirmed \ud83c\udfe0",
    "body": "Your stay is booked. Check-in details and house rules inside.",
    "isRead": false,
    "sentAt": 1760495529082,
    "removedAt": null,
    "from": "Airbnb",
    "fromEmail": "reservations@airbnb.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Promotions"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760477529082,
    "subject": "Payout pending",
    "body": "Your payout will arrive in your bank account in 2 business days.",
    "isRead": true,
    "sentAt": 1760477529082,
    "removedAt": null,
    "from": "Stripe",
    "fromEmail": "no-reply@stripe.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Promotions",
      "Social"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760459529082,
    "subject": "Important: update your payment method",
    "body": "We couldn\u2019t process your last payment. Update your details.",
    "isRead": false,
    "sentAt": 1760459529082,
    "removedAt": null,
    "from": "Netflix",
    "fromEmail": "billing@netflix.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Social"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760441529082,
    "subject": "Flight change notice \u2708\ufe0f",
    "body": "Your departure time has been updated. Review your itinerary.",
    "isRead": true,
    "sentAt": 1760441529082,
    "removedAt": null,
    "from": "AeroMexico",
    "fromEmail": "updates@aeromexico.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Social"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760423529082,
    "subject": "Your files were shared with you",
    "body": "A folder has been shared with you. View it now.",
    "isRead": false,
    "sentAt": 1760423529082,
    "removedAt": null,
    "from": "Dropbox",
    "fromEmail": "no-reply@dropbox.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Promotions"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760405529082,
    "subject": "Your package is arriving today \ud83d\udce6",
    "body": "Out for delivery. Your shipment will arrive by 8 PM.",
    "isRead": false,
    "sentAt": 1760405529082,
    "removedAt": null,
    "from": "DHL",
    "fromEmail": "tracking@dhl.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Primary",
      "Updates"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760387529082,
    "subject": "Usage summary for this month",
    "body": "Here is your API usage summary for the current billing cycle.",
    "isRead": false,
    "sentAt": 1760387529082,
    "removedAt": null,
    "from": "OpenAI",
    "fromEmail": "noreply@openai.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Promotions",
      "Primary"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760369529082,
    "subject": "Security alert: New sign-in to your Google Account \ud83d\udd10",
    "body": "We detected a new sign-in to your account. If this was you, no action is needed.",
    "isRead": false,
    "sentAt": 1760369529082,
    "removedAt": null,
    "from": "Google",
    "fromEmail": "no-reply@google.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Promotions"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760351529082,
    "subject": "Upcoming flight confirmation \u2708\ufe0f",
    "body": "Here are your itinerary details for your upcoming trip.",
    "isRead": false,
    "sentAt": 1760351529082,
    "removedAt": null,
    "from": "El Al",
    "fromEmail": "noreply@elal.co.il",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Social"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760333529082,
    "subject": "Weekly digest",
    "body": "Top stories and highlights from this week.",
    "isRead": true,
    "sentAt": 1760333529082,
    "removedAt": null,
    "from": "Newsletter",
    "fromEmail": "newsletter44@example.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Social",
      "Promotions"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760315529082,
    "subject": "Your photo memories are ready",
    "body": "Relive memories from summers past.",
    "isRead": true,
    "sentAt": 1760315529082,
    "removedAt": null,
    "from": "Google Photos",
    "fromEmail": "no-reply@google.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Primary",
      "Updates"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760297529082,
    "subject": "Your surfboard repair is ready \ud83d\udee0\ufe0f",
    "body": "Pickup available tomorrow at 9 AM.",
    "isRead": true,
    "sentAt": 1760297529082,
    "removedAt": null,
    "from": "SurfFix",
    "fromEmail": "repairs@surf-fix.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Primary",
      "Social"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760279529082,
    "subject": "Application received: Product Analyst",
    "body": "Thanks for applying. Our team will review your application.",
    "isRead": true,
    "sentAt": 1760279529082,
    "removedAt": null,
    "from": "Outbrain HR",
    "fromEmail": "careers@outbrain.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Primary"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760261529082,
    "subject": "Your YouTube Premium renewal",
    "body": "Thanks for being a Premium member. Renewal successful.",
    "isRead": true,
    "sentAt": 1760261529082,
    "removedAt": null,
    "from": "YouTube",
    "fromEmail": "billing@youtube.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Promotions"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760243529082,
    "subject": "Your meeting starts in 10 minutes",
    "body": "Join your scheduled Zoom meeting.",
    "isRead": false,
    "sentAt": 1760243529082,
    "removedAt": null,
    "from": "Zoom",
    "fromEmail": "no-reply@zoom.us",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Primary"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760225529082,
    "subject": "Reminder: payment due \ud83c\udf3f",
    "body": "Please confirm your billing info to avoid interruptions.",
    "isRead": false,
    "sentAt": 1760225529082,
    "removedAt": null,
    "from": "Easyplant",
    "fromEmail": "billing@easyplant.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Primary"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760207529082,
    "subject": "Payment reminder: storage rental",
    "body": "Your monthly payment is due in 2 days.",
    "isRead": true,
    "sentAt": 1760207529082,
    "removedAt": null,
    "from": "WaveLock Storage",
    "fromEmail": "billing@wavelock.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Promotions"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760189529082,
    "subject": "Meet your new teammate!",
    "body": "Please welcome Maya to the team. Let\u2019s schedule an intro.",
    "isRead": false,
    "sentAt": 1760189529082,
    "removedAt": null,
    "from": "HR Team",
    "fromEmail": "hr@mixtiles.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Promotions"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760171529082,
    "subject": "Payment received \u2014 thank you!",
    "body": "Your Notion subscription has been renewed. Receipt attached.",
    "isRead": false,
    "sentAt": 1760171529082,
    "removedAt": null,
    "from": "Notion",
    "fromEmail": "billing@notion.so",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Primary",
      "Updates"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760153529082,
    "subject": "Your free trial ends soon",
    "body": "Continue your mindfulness journey with Headspace Plus.",
    "isRead": true,
    "sentAt": 1760153529082,
    "removedAt": null,
    "from": "Headspace",
    "fromEmail": "support@headspace.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Updates",
      "Primary"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760135529082,
    "subject": "Invitation to collaborate on \u201cSurf Camp Project\u201d",
    "body": "I added you as an editor. Let\u2019s finalize before Friday.",
    "isRead": false,
    "sentAt": 1760135529082,
    "removedAt": null,
    "from": "Roy Arbel",
    "fromEmail": "roy.arbel@gmail.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Social"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760117529082,
    "subject": "Let\u2019s catch up this weekend!",
    "body": "I\u2019ll be around La Punta on Saturday \u2014 waves look perfect.",
    "isRead": true,
    "sentAt": 1760117529082,
    "removedAt": null,
    "from": "Eyal Shalem",
    "fromEmail": "eyal.shalem@gmail.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Social"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760099529082,
    "subject": "People are looking at your profile",
    "body": "Your profile had 12 new views this week. See who viewed you.",
    "isRead": false,
    "sentAt": 1760099529082,
    "removedAt": null,
    "from": "LinkedIn",
    "fromEmail": "updates@linkedin.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Promotions"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760081529082,
    "subject": "Daily surf forecast \u2013 Puerto Escondido \ud83c\udf0a",
    "body": "Head-high sets expected this weekend. Best window 6\u20139AM.",
    "isRead": false,
    "sentAt": 1760081529082,
    "removedAt": null,
    "from": "Surfline",
    "fromEmail": "forecast@surfline.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Promotions"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760063529082,
    "subject": "Confirm your subscription \u270d\ufe0f",
    "body": "Click to confirm and start receiving weekly prompts.",
    "isRead": true,
    "sentAt": 1760063529082,
    "removedAt": null,
    "from": "Substack",
    "fromEmail": "newsletter@substack.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Updates",
      "Social"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760045529082,
    "subject": "We noticed a new login to your account",
    "body": "New sign-in from Chrome in Mexico. Was this you?",
    "isRead": false,
    "sentAt": 1760045529082,
    "removedAt": null,
    "from": "Google",
    "fromEmail": "no-reply@google.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Social",
      "Updates"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760027529082,
    "subject": "Event confirmed",
    "body": "Your 30-minute meeting is on the calendar.",
    "isRead": true,
    "sentAt": 1760027529082,
    "removedAt": null,
    "from": "Calendly",
    "fromEmail": "notifications@calendly.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Primary"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1760009529082,
    "subject": "Today\u2019s top stories \u2615",
    "body": "Markets, tech, and business news \u2014 all in one quick email.",
    "isRead": true,
    "sentAt": 1760009529082,
    "removedAt": null,
    "from": "Morning Brew",
    "fromEmail": "news@morningbrew.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Promotions"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1759991529082,
    "subject": "Reminder: surfing meetup tomorrow \ud83c\udfc4\u200d\u2642\ufe0f",
    "body": "We\u2019re meeting at 7:30AM at La Punta. Don\u2019t be late!",
    "isRead": true,
    "sentAt": 1759991529082,
    "removedAt": null,
    "from": "Surf Friends",
    "fromEmail": "events@surfmail.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Promotions"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1759973529082,
    "subject": "New comment on your post",
    "body": "Someone replied to your story. See the discussion.",
    "isRead": true,
    "sentAt": 1759973529082,
    "removedAt": null,
    "from": "Medium",
    "fromEmail": "info@medium.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Updates",
      "Social"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1759955529082,
    "subject": "Your Apple ID was used to sign in",
    "body": "If this wasn\u2019t you, change your password immediately.",
    "isRead": false,
    "sentAt": 1759955529082,
    "removedAt": null,
    "from": "Apple",
    "fromEmail": "no-reply@apple.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Primary"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1759937529082,
    "subject": "You have new notifications",
    "body": "See what you missed on Facebook while you were away.",
    "isRead": true,
    "sentAt": 1759937529082,
    "removedAt": null,
    "from": "Facebook",
    "fromEmail": "no-reply@facebookmail.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Social",
      "Promotions"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1759919529082,
    "subject": "We\u2019re hiring product designers!",
    "body": "Explore open roles and join our design team.",
    "isRead": false,
    "sentAt": 1759919529082,
    "removedAt": null,
    "from": "Canva Careers",
    "fromEmail": "jobs@canva.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Promotions"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1759901529082,
    "subject": "Reminder: Assignment due tomorrow \ud83d\udcd8",
    "body": "Please submit your seminar paper before 23:59.",
    "isRead": true,
    "sentAt": 1759901529082,
    "removedAt": null,
    "from": "Reichman University",
    "fromEmail": "moodle@idc.ac.il",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Primary"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1759883529082,
    "subject": "We missed you! 20% off ends tonight",
    "body": "Use code WELCOME20 at checkout. Limited time offer.",
    "isRead": false,
    "sentAt": 1759883529082,
    "removedAt": null,
    "from": "Patagonia",
    "fromEmail": "offers@patagonia.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Promotions"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1759865529082,
    "subject": "New comment on issue #427",
    "body": "There\u2019s new activity on an issue you\u2019re subscribed to.",
    "isRead": true,
    "sentAt": 1759865529082,
    "removedAt": null,
    "from": "GitHub",
    "fromEmail": "noreply@github.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Primary",
      "Promotions"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1759847529082,
    "subject": "Your order has been shipped \ud83d\ude9a",
    "body": "Hi, your package is on the way. Track your shipment from Your Orders.",
    "isRead": true,
    "sentAt": 1759847529082,
    "removedAt": null,
    "from": "Amazon",
    "fromEmail": "no-reply@amazon.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Social"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1759829529082,
    "subject": "Missed messages in #product",
    "body": "Catch up on conversations you missed in Slack.",
    "isRead": false,
    "sentAt": 1759829529082,
    "removedAt": null,
    "from": "Slack",
    "fromEmail": "no-reply@slack.com",
    "to": "user@appsus.com",
    "status": "inbox",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Social",
      "Updates"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1759829529082,
    "subject": "Project update – Q4 results summary",
    "body": "Hi team, please find attached the quarterly results presentation. It includes revenue growth metrics, performance charts, and updated projections for next quarter. Let me know if you’d like to schedule a short sync to review the highlights.",
    "isRead": true,
    "sentAt": 1759829529082,
    "removedAt": null,
    "from": "Mahatma Appsus",
    "fromEmail": "user@appsus.com",
    "to": "finance@company.com",
    "status": "sent",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1759829529082,
    "subject": "Follow-up on partnership proposal",
    "body": "It was great speaking with you earlier this week. I’m attaching the proposal document we discussed, along with a brief summary of terms. Looking forward to your feedback and next steps.",
    "isRead": true,
    "sentAt": 1759829529082,
    "removedAt": null,
    "from": "Mahatma Appsus",
    "fromEmail": "user@appsus.com",
    "to": "daniel.mizrahi@partners.io",
    "status": "sent",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
    ]
  },
    {
    "id": utilService.makeId(),
    "createdAt": 1759829529082,
    "subject": "Team meeting rescheduled",
    "body": "The meeting originally planned for Wednesday has been moved to Thursday at 10:00 AM. Please update your calendars accordingly and confirm availability. Agenda and Zoom link will follow.",
    "isRead": true,
    "sentAt": 1759829529082,
    "removedAt": null,
    "from": "Mahatma Appsus",
    "fromEmail": "user@appsus.com",
    "to": "marketing-team@brandco.com",
    "status": "sent",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
    ]
  },
      {
    "id": utilService.makeId(),
    "createdAt": 1759829529082,
    "subject": "Design review – landing page draft",
    "body": "Attached is the first draft of the landing page for review. I’d appreciate any design or copy feedback before we move forward with development. Please add comments directly in Figma.",
    "isRead": true,
    "sentAt": 1759829529082,
    "removedAt": null,
    "from": "Mahatma Appsus",
    "fromEmail": "user@appsus.com",
    "to": "noa.levy@creativehub.com",
    "status": "sent",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
    ]
  },
      {
    "id": utilService.makeId(),
    "createdAt": 1759829529082,
    "subject": "Design review",
    "body": "Attached is the first draft of the landing page for review. I’d appreciate any design or copy feedback before we move forward with development. Please add comments directly in Figma.",
    "isRead": true,
    "sentAt": 1759829529082,
    "removedAt": null,
    "from": "Mahatma Appsus",
    "fromEmail": "user@appsus.com",
    "to": "noa.levy@creativehub.com",
    "status": "drafts",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
    ]
  },
      {
    "id": utilService.makeId(),
    "createdAt": 1759829529082,
    "subject": "Follow-up",
    "body": "I Would like to",
    "isRead": true,
    "sentAt": 1759829529082,
    "removedAt": null,
    "from": "Mahatma Appsus",
    "fromEmail": "user@appsus.com",
    "to": "marketing@ghouse.com",
    "status": "drafts",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
    ]
  },
    {
    "id": utilService.makeId(),
    "createdAt": 1759847529082,
    "subject": "Your order has been shipped \ud83d\ude9a",
    "body": "Hi, your package is on the way. Track your shipment from Your Orders.",
    "isRead": true,
    "sentAt": 1759847529082,
    "removedAt": 1759829529082,
    "from": "Amazon",
    "fromEmail": "no-reply@amazon.com",
    "to": "user@appsus.com",
    "status": "trash",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Social"
    ]
  },
  {
    "id": utilService.makeId(),
    "createdAt": 1759829529082,
    "subject": "Missed messages in #product",
    "body": "Catch up on conversations you missed in Slack.",
    "isRead": false,
    "sentAt": 1759829529082,
    "removedAt": 1759829529082,
    "from": "Slack",
    "fromEmail": "no-reply@slack.com",
    "to": "user@appsus.com",
    "status": "trash",
    "isStar": Math.random() > 0.7,
    "isImportant": Math.random() > 0.7,
    "isCheck": false,
    "categories": [
      "Social",
      "Updates"
    ]
  },
]