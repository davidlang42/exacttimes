function onGmailMessageOpen(e) {
  // Activate temporary Gmail scopes, in this case to allow
  // the add-on to read message metadata and content.
  var accessToken = e.gmail.accessToken;
  GmailApp.setCurrentMessageAccessToken(accessToken);

  // Read message metadata and content. This requires the Gmail scope
  // https://www.googleapis.com/auth/gmail.addons.current.message.readonly.
  var messageId = e.gmail.messageId;
  var message = GmailApp.getMessageById(messageId);

  // Setting the access token with a gmail.addons.current.message.readonly
  // scope also allows read access to the other messages in the thread.
  var thread = message.getThread();
  var threadMessages = thread.getMessages();

  // Construct the card
  const section = CardService.newCardSection();
  for (const m of threadMessages) {
    if (!m.isInTrash()) {
      const card = CardService.newDecoratedText()
        .setTopLabel(m.getFrom())
        .setText(m.getDate())
        .setWrapText(true);
      section.addWidget(card);
    }
  }

  var builder = CardService.newCardBuilder()
    .addSection(section);
  return builder.build();
}