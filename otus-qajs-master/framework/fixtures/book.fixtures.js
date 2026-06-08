const generateBookPayload = (overrides = {}) => ({
  isbn: overrides.isbn || `978${Math.floor(Math.random() * 900000000)}`,
  title: overrides.title || 'Test Book Title',
  author: overrides.author || 'Test Author',
  publisher: overrides.publisher || 'Test Publisher',
  pages: overrides.pages || 300,
  excerpt: overrides.excerpt || 'Test excerpt...',
  price: overrides.price || 19.99,
  ...overrides,
});

module.exports = {
  generateBookPayload,
};
