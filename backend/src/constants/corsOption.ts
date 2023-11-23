import deepFreeze from '../utils/deepFreeze';

const corsOptions = deepFreeze({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
});

export default corsOptions;
