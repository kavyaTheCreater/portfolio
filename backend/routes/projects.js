const express = require('express');
const router = express.Router();

// In-memory project data (can be replaced with database)
const projects = [
  {
    id: 1,
    title: "AI-Bot",
    description: "Hackezee Project - Intelligent AI bot implementation",
    tech: ["JavaScript", "AI/ML", "Node.js"],
    github: "https://github.com/kavyaTheCreater/AI-Bot",
    category: "ai",
    featured: true,
    createdAt: "2024-01-15"
  },
  {
    id: 2,
    title: "Inventory Dashboard",
    description: "Modern inventory management system",
    tech: ["TypeScript", "React", "Dashboard"],
    github: "https://github.com/kavyaTheCreater/inventory-dashboard",
    category: "web",
    featured: true,
    createdAt: "2024-02-20"
  },
  {
    id: 3,
    title: "To-Do List App",
    description: "Simple yet powerful task management application",
    tech: ["TypeScript", "React"],
    github: "https://github.com/kavyaTheCreater/todolist",
    category: "web",
    featured: false,
    createdAt: "2024-03-10"
  },
  {
    id: 4,
    title: "Cardiovascular Mortality Prediction",
    description: "ML pipeline with 85.4% accuracy",
    tech: ["Python", "Machine Learning", "AdaBoost"],
    github: null,
    category: "ml",
    featured: true,
    createdAt: "2024-04-05"
  },
  {
    id: 5,
    title: "Debouncing Circuit",
    description: "Hardware implementation using Vivado",
    tech: ["Verilog", "Vivado", "FPGA"],
    github: null,
    category: "hardware",
    featured: false,
    createdAt: "2023-11-20"
  }
];

// GET all projects
router.get('/', (req, res) => {
  const { category, featured } = req.query;
  
  let filteredProjects = [...projects];
  
  if (category && category !== 'all') {
    filteredProjects = filteredProjects.filter(p => p.category === category);
  }
  
  if (featured === 'true') {
    filteredProjects = filteredProjects.filter(p => p.featured === true);
  }
  
  res.status(200).json({
    success: true,
    count: filteredProjects.length,
    data: filteredProjects
  });
});

// GET single project by ID
router.get('/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  
  if (!project) {
    return res.status(404).json({
      success: false,
      error: 'Project not found'
    });
  }
  
  res.status(200).json({
    success: true,
    data: project
  });
});

// GET project statistics
router.get('/stats/summary', (req, res) => {
  const stats = {
    total: projects.length,
    featured: projects.filter(p => p.featured).length,
    byCategory: {
      ai: projects.filter(p => p.category === 'ai').length,
      web: projects.filter(p => p.category === 'web').length,
      ml: projects.filter(p => p.category === 'ml').length,
      hardware: projects.filter(p => p.category === 'hardware').length
    }
  };
  
  res.status(200).json({
    success: true,
    data: stats
  });
});

module.exports = router;