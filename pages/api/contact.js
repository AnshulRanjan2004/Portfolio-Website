export default async function handler(req, res) {
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({
        name: 'Only POST requests allowed.',
      }),
      {
        status: 405,
        headers: {
          'content-type': 'application/json',
        },
      }
    );
  }
  try{
  const { name, email, subject, message } = JSON.parse(req.body);
    if (!name || !email || !message) {
        return new Response(
            JSON.stringify({
                message: "Missing required fields",
            }),
            { status: 400 }
        );
    }
    const discord_webhook_url = "https://discord.com/api/webhooks/1118963806681452605/aJ34FDpT196dUBGK3NsqdRx2VGlsqHcvqN7Q1sBNOZvbJ3eiAK0xMb87pWGoeZNooA2-"
    await fetch(discord_webhook_url, {
        method: "post",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                "content": `**Name**: ${name}\n**Email**: ${email}\n**__Subject__**:\n${subject}\n**__message__**:\n${message}`,
                "embeds": null,
                "username": "IEEE RAS PESU SITE",
                "avatar_url": "https://www.ieee-ras.org/images/files/template/ieee-ras-logo.png",
                "attachments": []
            }
        )
    })
    res.status(201).json({ msg: 'Success' });
  }catch(e){
    res.status(500).json({ msg: 'Failed' });
  }
}

