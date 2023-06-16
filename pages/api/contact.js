export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      name: 'Only POST requests allowed.',
    });
  }

  try {
    const { name, email, subject, message } = JSON.parse(req.body);
    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const discord_webhook_url = "https://discord.com/api/webhooks/1118963806681452605/aJ34FDpT196dUBGK3NsqdRx2VGlsqHcvqN7Q1sBNOZvbJ3eiAK0xMb87pWGoeZNooA2-";
    
    await fetch(discord_webhook_url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: `**Name**: ${name}\n**Email**: ${email}\n**__Subject__**:\n${subject}\n**__message__**:\n${message}`,
        embeds: null,
        username: "Portfolio Contact Form",
        avatar_url: "https://imgur.com/kL8cwUb.png",
        attachments: []
      })
    });

    res.status(200).json({
      message: 'Your response has been received!',
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Internal server error. Please try again later.',
    });
  }
}