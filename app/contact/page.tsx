export default function Contact() {
  return (
    <section className="container mx-auto py-20">
      <h1 className="text-3xl font-bold text-center mt-20 mb-8">İletişim</h1>
      <form className="max-w-lg mx-auto bg-base-100 p-6 shadow-md rounded-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Adınız</label>
          <input type="text" className="input input-bordered w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">E-posta</label>
          <input type="email" className="input input-bordered w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Mesajınız</label>
          <textarea
            className="textarea textarea-bordered w-full"
            rows={4}></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Gönder
        </button>
      </form>
    </section>
  );
}
