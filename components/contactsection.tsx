import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub} from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-20 py-20 px-6 md:px-12 bg-navy text-white"
    >
      <motion.div
        className="max-w-xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get in Touch</h2>
        <p className="text-lg text-neutral-200 mb-8">
          Whether you want to collaborate, hire, or just say hi — feel free to reach out!
        </p>
        <a
          href="mailto:sharon01092005@gmail.com"
          className="inline-block px-6 py-2 bg-red text-white rounded-xl font-medium text-sm shadow hover:scale-105 hover:shadow-md transition"
        >
          Say Hello
        </a>
        
        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://linkedin.com/in/sharon-shaji-0858b1372"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl !text-white hover:text-blue-500 transition"
          >
            <FaLinkedin style={{ color: '#fff' }} />
          </a>
          <a
            href="https://github.com/Sharon1905"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl !text-white hover:text-gray-300 transition"
          >
            <FaGithub style={{ color: '#fff' }} />
          </a>
          <a
            href="https://instagram.com/justtt.sharon                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               "
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl !text-white hover:text-red-400 transition"
          >
            <FaInstagram style={{ color: '#fff' }} />
          </a>
        </div>
       
      </motion.div>
    </section>
  );
};

export default ContactSection;
