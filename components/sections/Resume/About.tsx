type Profile = {
  name: string;
  experience: string;
  country: string;
  state: string;
  phone: string;
  email: string;
  education: string;
  languages: string[];
};

export default function About() {
  const profile: Profile = {
    name: "Karim Omran",
    experience: "+2 Year",
    country: "Egypt",
    state: "Alexandria",
    phone: "(+20) 1277913201",
    email: "eng.karimomran@gmail.com",
    education: "Diploma in IT",
    languages: ["Arabic", "English"],
  };

  const profileEntries = Object.entries(profile);

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {profileEntries.map(([key, value]) => (
        <li key={key} className="my-auto">
          <span className="text-muted-foreground font-semibold capitalize">
            {key.replace("_", " ")}:{" "}
          </span>
          {Array.isArray(value) ? value.join(", ") : value}
        </li>
      ))}
    </ul>
  );
}
