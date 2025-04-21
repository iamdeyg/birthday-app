const cron = require("cron");
const nodemailer = require("nodemailer");
const User = require("./models/user");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com", // Replace with your email
    pass: "your-email-password", // Replace with your email password or app-specific password
  },
});

const job = new cron.CronJob("0 7 * * *", async () => {
  const today = new Date().toISOString().split("T")[0]; // Today's date in 'YYYY-MM-DD' format

  try {
    const users = await User.find({ dob: today });

    users.forEach((user) => {
      const mailOptions = {
        from: "your-email@gmail.com",
        to: user.email,
        subject: "Happy Birthday!",
        html: `<h1>Happy Birthday, ${user.username}!</h1><p>We hope you have a fantastic day!</p>`,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.log("Error sending email: ", err);
        } else {
          console.log("Email sent: ", info.response);
        }
      });
    });
  } catch (err) {
    console.log("Error fetching users for birthday: ", err);
  }
});

job.start();
