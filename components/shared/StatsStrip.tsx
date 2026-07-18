const achievements = [
  { value: "45,000+", label: "Tax Returns Filed" },
  { value: "3,500+", label: "Students Trained" },
  { value: "200+", label: "Courses Offered" },
  { value: "100+", label: "IRS CE Credits Approved" },
];

export default function StatsStrip({ dark = false }: { dark?: boolean }) {
  return (
    <section
      className={`w-full flex justify-center px-8 py-10 ${
        dark ? "bg-[#131313] text-white" : "bg-white text-[#0B0C0E]"
      }`}
    >
      <div
        className={`max-w-[1640px] w-full grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y ${
          dark ? "border-white/15" : "border-black/10"
        }`}
      >
        {achievements.map((item) => (
          <div key={item.label} className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary">
              {item.value}
            </p>
            <p
              className={`text-sm mt-1 ${
                dark ? "text-white/70" : "text-gray-600"
              }`}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
