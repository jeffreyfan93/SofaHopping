@sofas.each do |sofa|
  json.set! sofa.id do
    json.partial! "api/sofas/sofa", sofa: sofa
  end
end
