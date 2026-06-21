import RegisterForm from "./RegisterForm";


const SignUpPage = () => {
  return (
    <section className="min-h-[80vh] bg-[#050B16]">
      <div className="container mx-auto flex min-h-[80vh] items-center justify-center px-4 py-12">
        <RegisterForm />
      </div>
    </section>
  );
};

export default SignUpPage;